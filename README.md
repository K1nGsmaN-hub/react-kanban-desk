# Kanban-доска

## Интерфэйс приложения
![Imgur](https://i.imgur.com/QcXioKz.jpg)

На начальной странице находится два блока.

Первый блок, находится слева, в него помещено имя пользователя (in future: аватарка, настройки профиля)

Второй блок, расположен в правой части страницы, в нем находятся все, созданные пользователем доски.  
В правом верхнем углу, на одном уровне с надписью находится кнопка «Создать»

![Imgur](https://i.imgur.com/ktstHdG.jpg)

При нажатии на кнопку, открывается модальное окно, в котором находится форма создания новой доски.  
Она состоит из следующих полей:  
- Название доски
- Сокращенное название (обязательно в верхнем регистре)
- Описание доски
- [in future] доступ к доске
- [in future] права доступа<br/>

На каждой доске висит название, а иконкой является сама доска (как в фигме). Нажав на нее, пользователь проваливается внутрь.

![Imgur](https://i.imgur.com/E0F6ZcK.jpg)
![Imgur](https://i.imgur.com/kAU4CaG.jpg)

Внутри доска состоит из хедера и основного поля. В хедере находится кнопка «Назад», название доски и кнопка «Настройки»

![Imgur](https://i.imgur.com/xmKOnim.jpg)

По нажатию на кнопку «Настройки», открывается страница настроек доски. Она содержит следующие пункты:
- Название доски
- Сокращенное название (Нельзя изменить)
- Описание доски
- Статусы для задач
- [in future] Права доступа
- [in future] Пригласить пользователя (ссылкой или по логину)

В основной части, находится кнопка «Создать колонку», по нажатию на которую будет создана колонка, где сверху можно 
вписать её название. В колонке появится кнопка «Создать задачу», 
при нажатии откроется модальное окно с формой создания задачи.

![Imgur](https://i.imgur.com/H9f8nHL.jpg)

Она состоит из следующих полей:
- Название задачи
- Описание задачи
- [in future] Исполнитель задачи
- [in future] Связывание нескольких задач

По нажатию на созданную задачу, открывается модальное окно, сбоку.

![Imgur](https://i.imgur.com/rtGnw7j.jpg)

В нем находится название и описание задачи. А так же:
- Кнопка «Удалить задачу»
- Селектор «Статус задачи» (Статусы добавляются в настройках доски)
- Кнопки «Сохранить» и «Отмена» (Появляются при внесении изменений)
- [in future] Создатель задачи
- [in future] Исполнитель задачи
- [in future] Комментарии к задаче

Поля «Название задачи» и «Описание» можно изменить по двойному клику на текст.

## Список страниц:
**[GET]** `/ - (страница авторизации)`  
**[GET]** `/tables/ - (главная страница, со списком таблиц)`  
**[GET]** `/tables/:id/ - (страница с таблицей)`  
**[GET]** `/tables/:id/settings/ - (страница настроек таблицы)`  
**[in future][GET]** `/tables/:id/:task_id/ - (отдельная страница с задачей)`  

## Модели данных в БД
```typescript
type TaskStatus = {
    _id: string;
    title: string; // мб переделать на то, чтобы статусы выдавались автоматически. Имя колонки === Статус задачи. Но имя статуса можно было изменить и/или добавить/удалить статус.
}

type Task = {
    _id: string;
    title: string;
    description?: string;
    status: TaskStatus; // auto set by the column name
}

type Column = {
    _id: string;
    title: string;
    tasks?: Task[];
}

type Table = {
    _id: string;
    title: string;
    shortName: string; // [A-Z]
    description?: string;
    taskStatuses?: TaskStatus[];
    columns?: Column[];
}

type User = {
    _id: string;
    name: string;
    email?: email;
    tables?: Table[];
}
```

## Поля в БД

```typescript
type DBStructor = {
    users: User[];
}
```

## API
```
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
```











