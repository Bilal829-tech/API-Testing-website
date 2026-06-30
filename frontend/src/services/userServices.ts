import apiClient from "./apiClient";

const userServices = {
    getAllUser: async () => {
      const response = await apiClient.get('/api/users')

      return response.data
    },

    createUser: async (userData: {
      first_name: string
      last_name: string
      email: string
      gender: string
    }) => {
      const response = await apiClient.post('/api/users', userData)
      return response.data
    },

    getUserById: async (id: number) => {
      const response = await apiClient.get(`/api/users/${id}`)
      return response.data
    },

    updateUser: async (id: number, userData: {
      first_name: string
      last_name: string
      email: string
      gender: string
    }) => {
      const response = await apiClient.put(`/api/users/${id}`, userData)
      return response.data
    },

    deleteUser: async (id: number) => {
      const response = await apiClient.delete(`/api/users/${id}`)
      return response.data
    },
}

export default userServices