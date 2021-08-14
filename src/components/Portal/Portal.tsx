import uniqueId from 'lodash/uniqueId';
import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { PortalProps } from "./Portal.types";

export const Portal = (props : PortalProps) => {

    const { onClickOutside, children } = props;

    const [defaultNode, setDefaultNode] = useState(null);
    const [id, ] = useState(uniqueId())

    const handleDocumentClick = useCallback((e) => {
        if (!e.parentModals || !e.parentModals.includes(id)) {
            onClickOutside();
        }
    }, []);

    const handleClickInsideModal = useCallback((e) => {
        const currentParentModals = e.nativeEvent.parentModals || [];
        e.nativeEvent.parentModals = [...currentParentModals, id];
    }, []);

    useEffect(() => {
        if (!defaultNode) {
            const defNode = document.createElement('div');
            document.body.appendChild(defNode);
            setDefaultNode(defNode)
        }

        if (!onClickOutside) return;
        window.addEventListener('click', handleDocumentClick);

        return () => {
            if (defaultNode) {
                document.body.removeChild(defaultNode);
            }

            window.removeEventListener('click', handleDocumentClick);
        }
    }, [defaultNode])

    if (!defaultNode) {
        return null;
    }

    return ReactDOM.createPortal(<div onClick={handleClickInsideModal}>{children}</div>, defaultNode);
}

export default Portal;