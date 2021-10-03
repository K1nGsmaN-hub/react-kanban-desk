module.exports = {
    // Users
    USERS: `/api/users`, // post
    USER_BY_ID: `/api/users/:user_id`, // delete, get, patch

    // Tables
    TABLES: `/api/tables`, // post
    TABLE_BY_ID: `/api/tables/:table_id`, // delete, patch
    TABLES_BY_USER_ID: '/api/tables/?user_id=', // get

    // Columns
    COLUMNS: `/api/columns`, // post
    COLUMN_BY_ID: `/api/columns/:column_id`, // delete, patch
    COLUMNS_BY_TABLE_ID: '/api/columns/?table_id=', // get

    // Tasks
    TASKS: `/api/tasks`, // post
    TASK_BY_ID: `/api/tasks/:task_id`, // delete, get, patch
    TASKS_BY_TABLE_ID: '/api/tasks/?table_id=', // get
};
