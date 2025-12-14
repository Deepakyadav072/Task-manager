**Task Manager** -- Drag-and-Drop Todo List App In React.
![image alt](https://github.com/Deepakyadav072/Task-manager/blob/374005401b3df39db1b22681c44132ac822747b7/Screenshot%20(395).png)

A modern task management application built with React and Vite.

**Overview**

The Drag-and-Drop Todo List App is a simple yet powerful React application that allows users to manage their tasks efficiently. The app enables users to create, update, and delete tasks, add due dates and priority levels (Low, Medium, High), and drag and drop tasks between different categories. The state of the tasks is stored in localStorage, ensuring that progress is retained even after a page refresh.

**Features**

1. **Add :** Users can enter tasks and add them to the list.
2. **Drag and Drop:** Easily move tasks between different sections.
3. **Edit Tasks:** Drag a task to the input field to modify and  update it.
4. **Delete Tasks:** Drag a task to the delete section to remove it.
5. **Due Dates:** Add due dates to tasks to track deadlines.
6. **Priority Levels:** Assign priority to tasks (Low, Medium, High).
7. **Persistent Storage:** Tasks are stored in localStorage.
8. **Modern UI:** Styled with CSS and gradient effects for a sleek look.

 **Technologies Used**

- **React** - JavaScript library for building user interfaces
- **Vite** - Next generation frontend tooling
- **react-beautiful-dnd** - Beautiful and accessible drag and drop for library for React
- **JavaScript** - Programming language
- **CSS** - Styling 


**Installation**

1. Clone the repository or extract the project files
2. Navigate to the project directory:
   ```bash
   cd task-manager
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

**Usage**

### Adding Tasks
1. Enter your task description in the input field.
2. (Optional) Click the date picker to set a due date.
3. (Optional) Select a priority level: **Low**, **Medium**, or **High**.
4.  click the **Go** button to create the task.

### Managing Tasks
- **Change Task Status**: Drag tasks between different sections (Todo, In Progress, Completed) to update their status.
- **View Tasks**: All tasks are displayed with their title, due date, priority level, and status.

### Editing Tasks
- Click on a task or drag it to the input field to edit.
- Modify the task details (title, due date, priority).
- click **Update** to save changes.

### Deleting Tasks
- Drag a task to the **Delete** section to remove it permanently.

### Data Persistence
- All tasks, including their title, due date, priority, and status, are automatically saved in `localStorage`.
- Your task list persists across browser sessions and page reloads.


**File Structure**


## Future Enhancements

1- Add user authentication for personalized task lists.
2- Implement a database backend for cloud storage.
3- Create dark mode theme.
4- Add keyboard shortcuts for productivity.
