import { useFetch, useRuntimeConfig } from '#imports'

export async function fetchData(endpoint) {
    const config = useRuntimeConfig();
    const url = `${config.public.baseUrl}${endpoint}`;

    try {
        const { data, error } = await useFetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (error.value) {
            throw new Error('Erreur lors de la récupération des données');
        }

        const fetchedData = data.value['hydra:member'] || data.value || [];
        return fetchedData;
    } catch (err) {

        throw new Error('Erreur lors de la récupération des données');
    }
}
