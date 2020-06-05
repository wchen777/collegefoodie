import yelp from '../api/yelp';
import {useState, useEffect} from 'react';

export default (name) => {
    const[results, setResults] = useState([]);
    const[error, setError] = useState('');

    // const loc = () => {
    //     switch(id) {
    //         case 'brown':
    //             return 'Providence, RI 02912';
    //         case 'columbia':
    //             return 'New York, NY 10027';
    //         case 'dartmouth':
    //             return 'Hanover, NH 03755';
    //         case 'yale':
    //             return 'New Haven, CT 06520';
    //         case 'cornell':
    //             return 'Ithaca, NY 14850';
    //         case 'princeton':
    //             return 'Princeton, NJ 08544';
    //         case 'upenn':
    //             return 'Philadelphia, PA 19104';
    //         case 'harvard':
    //             return 'Cambridge, MA';
    //     }
    // }
    
    const searchAPI = async (searchTerm) => {
     try {
         const response = await yelp.get('/search', {
           params: {
            limit: 50,
            term: searchTerm,
            location: name
          }
         });
        setResults(response.data.businesses);
        }
        catch(err) {
            setError('Something went wrong. Try again later!');
        }
    }

    // want to run code just one time when start app
    useEffect(() => {
        searchAPI('');
    }, []);

    return [searchAPI, results, error];
};


