// services/api.js
import { useFetch, useRuntimeConfig } from '#app'
import { ref } from 'vue'
import {useAsyncData} from "#imports";



export const api = {
    async fetch(endpoint) {
        const config = useRuntimeConfig()
        const BASE_URL = config.public.baseUrl


        const { data, error } = await useAsyncData(
            'fetchData',
            async () => {
                const response = await $fetch(`${BASE_URL}${endpoint}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                return response['hydra:member'] || response
            }
        )


       /* const { data, error } = await useFetch(`${BASE_URL}/${endpoint}`, {
            key: endpoint // Caching key to avoid conflicts
        })*/

        if (error.value) {
            let errorMessage = 'An error occurred while fetching data'
            if (error.value.response) {
                if (error.value.response.status === 404) {
                    errorMessage = 'Resource not found (404)'
                } else {
                    //errorMessage = `Error: ${error.value.response.status} ${error.value.response.statusText}`
                    errorMessage = `Une erreur s'est produite lors de la récupération des données`
                }
            } else if (error.value.message) {
                errorMessage = `Une erreur s'est produite lors de la récupération des données`; //error.value.message
            }
            throw new Error(errorMessage)
        }
        if (data.value['hydra:member'] === undefined) {
            return data.value
        }else{
            return data.value['hydra:member'] || []
        }

    },

    async fetchWithLoading(endpoint) {
        const data = ref([])
        const error = ref(null)
        const loading = ref(false)

        try {
            data.value = await this.fetch(endpoint)


        } catch (err) {

            error.value = err.message

        } finally {
            loading.value = true
        }

        return { data, error, loading }
    }
}
