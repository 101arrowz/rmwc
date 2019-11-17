import * as RMWC from '@rmwc/types';
import * as React from 'react';

import { MDCDialogFoundation } from '@material/dialog';

import { useClassNames, Tag } from '@rmwc/base';
import { Button, ButtonProps } from '@rmwc/button';
import { useDialogFoundation } from './foundation';

/*********************************************************************
 * Events
 *********************************************************************/

export type DialogOnOpenEventT = RMWC.CustomEventT<{}>;
export type DialogOnCloseEventT = RMWC.CustomEventT<{ action?: string }>;

/*********************************************************************
 * Dialogs
 *********************************************************************/

/** A Dialog component. */
export interface DialogProps {
  /** Whether or not the Dialog is showing. */
  open?: boolean;
  /** Callback for when the Dialog opens. */
  onOpen?: (evt: DialogOnOpenEventT) => void;
  /** Callback for when the Dialog closes. evt.detail = { action?: string }*/
  onClose?: (evt: DialogOnCloseEventT) => void;
  /** Callback to use if you need more direct access to the Dialog's lifecycle. */
  onStateChange?: (state: 'opening' | 'opened' | 'closing' | 'closed') => void;
  /** Prevent the dialog from closing when the scrim is clicked. */
  preventOutsideDismiss?: boolean;
}

/** A Dialog component. */
export function Dialog(props: DialogProps & RMWC.ComponentProps) {
  const { rootEl } = useDialogFoundation(props);

  const className = useClassNames(props, ['mdc-dialog']);

  const {
    children,
    open,
    onOpen,
    onClose,
    onStateChange,
    preventOutsideDismiss,
    ...rest
  } = props;
  return (
    <Tag
      role="alertdialog"
      aria-modal
      {...rootEl.props({ ...rest, className })}
      ref={rootEl.setRef}
    >
      <div className="mdc-dialog__container">
        <div className="mdc-dialog__surface">{children}</div>
      </div>
      <DialogScrim disableInteraction={preventOutsideDismiss} />
    </Tag>
  );
}

/** A SimpleDialog component for ease of use. */
export interface SimpleDialogProps extends DialogProps {
  /** A title for the default Dialog template. */
  title?: React.ReactNode;
  /** Additional Dialog header content for the default Dialog template. */
  header?: React.ReactNode;
  /** Body content for the default Dialog template, rendered before children. */
  body?: React.ReactNode;
  /** Additional footer content for the default Dialog template, rendered before any buttons. */
  footer?: React.ReactNode;
  /** Creates an accept button for the default Dialog template with a given label. You can pass `null` to remove the button.*/
  acceptLabel?: React.ReactNode;
  /** Creates an cancel button for the default Dialog with a given label. You can pass `null` to remove the button.*/
  cancelLabel?: React.ReactNode;
  /** Any children will be rendered in the body of the default Dialog template. */
  children?: React.ReactNode;
}

/** A SimpleDialog component for ease of use. */
export function SimpleDialog({
  title,
  header,
  body,
  footer,
  acceptLabel = 'Accept',
  cancelLabel = 'Cancel',
  children,
  open,
  ...rest
}: RMWC.MergeInterfacesT<SimpleDialogProps, RMWC.ComponentProps>) {
  return (
    <Dialog open={open} {...rest}>
      {(!!title || !!header) && (
        <DialogTitle>
          {!!title && title}
          {!!header && header}
        </DialogTitle>
      )}
      {(!!body || children) && (
        <DialogContent>
          {body}
          {children}
        </DialogContent>
      )}

      {(!!cancelLabel || !!acceptLabel || !!footer) && (
        <DialogActions>
          {!!footer && footer}
          {!!cancelLabel && (
            <DialogButton action="close">{cancelLabel}</DialogButton>
          )}
          {!!acceptLabel && (
            <DialogButton action="accept" isDefaultAction>
              {acceptLabel}
            </DialogButton>
          )}
        </DialogActions>
      )}
    </Dialog>
  );
}
SimpleDialog.displayName = 'SimpleDialog';

/*********************************************************************
 * Bits
 *********************************************************************/

interface DialogScrimProps {
  disableInteraction?: boolean;
}

const DialogScrim = React.memo(function DialogScrim({
  disableInteraction
}: DialogScrimProps) {
  const style: React.CSSProperties = disableInteraction
    ? { pointerEvents: 'none' }
    : {};
  return <div className="mdc-dialog__scrim" style={style} />;
});

/** The Dialog title. */
export interface DialogTitleProps {}

/** The Dialog title. */
export const DialogTitle = React.forwardRef<
  any,
  DialogTitleProps & RMWC.ComponentProps
>(function DialogTitle(props, ref) {
  const className = useClassNames(props, ['mdc-dialog__title']);
  return <Tag tag="h2" ref={ref} {...props} className={className} />;
});
DialogTitle.displayName = 'DialogTitle';

/** The Dialog content. */
export interface DialogContentProps {}

/** The Dialog content. */
export const DialogContent = React.forwardRef<
  any,
  DialogContentProps & RMWC.ComponentProps
>(function DialogContent(props, ref) {
  const className = useClassNames(props, ['mdc-dialog__content']);
  return <Tag ref={ref} {...props} className={className} />;
});
DialogContent.displayName = 'DialogContent';

/** Actions container for the Dialog. */
export interface DialogActionsProps {}

/** Actions container for the Dialog. */
export const DialogActions = React.forwardRef<
  any,
  DialogActionsProps & RMWC.ComponentProps
>(function DialogActions(props, ref) {
  const className = useClassNames(props, ['mdc-dialog__actions']);
  return <Tag ref={ref} {...props} className={className} />;
});
DialogActions.displayName = 'DialogActions';

/** Action buttons for the Dialog. */
export interface DialogButtonProps extends ButtonProps {
  /** An action returned in evt.detail.action to the onClose handler. */
  action?: string;
  /** Indicates this is the default selected action when pressing enter */
  isDefaultAction?: boolean;
}

/** Action buttons for the Dialog. */
export const DialogButton = React.forwardRef<
  any,
  DialogButtonProps & RMWC.ComponentProps
>(function DialogButton(props, ref) {
  const className = useClassNames(props, ['mdc-dialog__button']);
  const { action = '', isDefaultAction, ...rest } = props;
  const defaultProp = !!isDefaultAction
    ? { [MDCDialogFoundation.strings.BUTTON_DEFAULT_ATTRIBUTE]: true }
    : {};

  return (
    <Button
      {...rest}
      {...defaultProp}
      ref={ref}
      className={className}
      data-mdc-dialog-action={action}
    />
  );
});
DialogButton.displayName = 'DialogButton';
