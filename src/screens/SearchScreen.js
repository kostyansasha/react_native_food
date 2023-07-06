import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import yelp from '../api/yelp';
import SearchBar from '../components/SearchBar';


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [result, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
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
            setErrorMessage('Error...');
        }
    }

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>Search Screen: {result.length}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;