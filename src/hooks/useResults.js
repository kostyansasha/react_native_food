import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async searchTerm => {
        console.log('request api');

        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });

            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Error...' + err.errorMessage);
        }
    };

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return  [searchApi, results ,errorMessage]
}