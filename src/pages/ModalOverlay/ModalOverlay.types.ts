import {ReactNode, ReactPortal} from "react";

export type TModalOverlay = ({children, handleClose}: { children: ReactNode; handleClose: ()=> void }) => ReactPortal
