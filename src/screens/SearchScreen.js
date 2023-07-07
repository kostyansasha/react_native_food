import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import { ScrollView } from 'react-native';


const SearchScreen = () => {
    //console.log(props);

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filteringResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            /
            >
            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <ScrollView horizontal={false} vertical={true}>
                <ResultsList results={filteringResultsByPrice('$')} title='111' />
                <ResultsList results={filteringResultsByPrice('$$')} title='222' />
                <ResultsList results={filteringResultsByPrice('$$$')} title='333' />
            </ScrollView> 
        </>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;