import axios from 'axios';

export default {
    form ( uri, options ){
        if( uri.charAt( 0 ) === '/' ) uri = uri.slice( 1 );
        return axios.post( process.env.REMOTE_ADDR + uri, options);
    }
};