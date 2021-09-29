export const URLS = {
    MAIN: '/',

    // Users
    USER: `/users/`, // get, post
    USER_BY_ID: `/users/:id`, // delete, get, patch

    // Tables
    TABLES: `${this.USER_BY_ID}/tables`, // get, post
    TABLE_BY_ID: `${this.TABLES}/:table_id`, // delete, get, patch

    // Columns
    COLUMNS: `${this.TABLE_BY_ID}/columns`, // get, post
    COLUMN_BY_ID: `${this.COLUMNS}/:column_id`, // delete, patch

    // Tasks
    TASKS: `${this.COLUMN_BY_ID}/tasks`, // post
    TASK_BY_ID: `${this.TASKS}/:task_id`, // delete, get, patch
};

/*
[GET] /api/ - все данные из БД <DBStructor>

[GET] /api/users/ - все пользователи <User[]>
[POST] /api/users/ добавить нового пользователя <User>

[GET] /api/users/:id/ - пользователь по ID <User>
[PATCH] /api/users/:id/ - изменение параметров пользователя
[DELETE] /api/users/:id/ - удалить пользователя

[GET] /api/users/:id/tables/ - все таблицы пользователя <Table[]>
[POST] /api/users/:id/tables/ - добавить новую таблицу <Table>

[GET] /api/users/:id/tables/:table_id/ - таблица по table ID <Table>
[PATCH] /api/users/:id/tables/:table_id/ - изменение параметров таблицы
[DELETE] /api/users/:id/tables/:table_id/ - удалить таблицу

[POST] /api/users/:id/tables/:table_id/columns/ - добавить новую колонку <Column>

[PATCH] /api/users/:id/tables/:table_id/columns/:column_id/ - изменение параметров колонки
[DELETE] /api/users/:id/tables/:table_id/columns/:column_id/ - удалить колонку

[POST] /api/users/:id/tables/:table_id/columns/:column_id/tasks/ - добавить нувую задачу <Task>

[GET] /api/users/:id/tables/:table_id/columns/:column_id/tasks/:task_id/ - задача по ID <Task>
[PATCH] /api/users/:id/tables/:table_id/columns/:column_id/tasks/:task_id/ - изменение параметров задачи
[DELETE] /api/users/:id/tables/:table_id/columns/:column_id/tasks/:task_id/ - удаленить задачу
*/
