import { createContext } from "react";

const Context = createContext<[Number, any]>([0, () => {}]);

export default Context;
