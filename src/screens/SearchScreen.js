import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filteringResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            /
            >
            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <Text>Found: {results.length}</Text>
            <ResultsList results={filteringResultsByPrice('$')}   title='111' />
            <ResultsList results={filteringResultsByPrice('$$')}  title='222' />
            <ResultsList results={filteringResultsByPrice('$$$')} title='333' />
        </View>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;