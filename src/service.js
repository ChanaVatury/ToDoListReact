import apiClient from './axiosConfig';


export default {
  getTasks: async () => {
    const result = await apiClient.get("/tasks");  
    return result.data;
  },

  addTask: async(name)=>{
    try {
      const newTask = { name, isComplete: false }; 
      const response = await apiClient.post("/tasks", newTask);
      return response.data;
    } catch (error) {
      console.error("Error adding task:", error); 
      throw error;
    }
  },

  setCompleted: async(id, isComplete)=>{
    try {     
      const response = await apiClient.put(`tasks/${id}`, isComplete);
      return response.data; 
    } catch (error) {
      console.error("Error updating task completion:", error); 
      throw error;
    }
  },

  deleteTask:async(id)=>{
    try {
      const response = await apiClient.delete(`/tasks/${id}`);
      alert(response.data)
    }
    catch(error){
      console.error("Error deleting task completion:", error); // טיפול בשגיאות
      throw error;
    }
  }
};
