"use client";

import React, { FC } from 'react';
import { Modal } from "@mui/material";

type Props = {
    open: boolean;
    setopen: (open: boolean) => void;
    activeItem: number;
    component: any;
    setroute?: React.Dispatch<React.SetStateAction<string>>;
};

const CustomModal: FC<Props> = ({
    open,
    setopen,
    activeItem,
    component: Component,
    setroute
}) => {
    return (
        <Modal
            aria-labelledby="modal-modal-title"
            aria-describedby="educonnected modal"
            open={open}
            onClose={() => setopen(false)}
            closeAfterTransition
        >
            <div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadow p-4 outline-none'>
                <Component setOpen={setopen} setRoute={setroute} />
            </div>
        </Modal>
    );
}

export default CustomModal;
