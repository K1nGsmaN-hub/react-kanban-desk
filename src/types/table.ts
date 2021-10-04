import { TypeTaskStatus } from './task-status';

export type TypeTable = {
    userID: string;
    title: string;
    shortName: string;
    description?: string;
    taskStatuses?: TypeTaskStatus[];
};
