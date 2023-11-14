import { getServerSession } from "next-auth";
import { options } from "./options";

export const getAuthSession = async () => await getServerSession(options);
