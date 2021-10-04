import { TypeTaskStatus } from './task-status';

export type TypeTask = {
    tasbleID: string;
    title: string;
    description?: string;
    status: TypeTaskStatus;
};
