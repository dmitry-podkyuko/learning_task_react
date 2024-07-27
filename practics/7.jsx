import React from 'react';
import { activateUser, deactivateUser } from '@redux/actions/user';
import { getSchema as url } from '@constants/apiUrls';
import { http } from '@shared/services';

// Оптимизируйте и исправьте компонент

const Component = (props) => {
        const {show} = props;
        console.log(show);
        const [state, setState] = useState(false);
        const dispatch = useDispatch();

        if (!show) {
                return null;
        }

        useEffect(() => {
                setState(true);
                dispatch(activateUser());
                return dispatch(deactivateUser);
        }, [show]);

        const info = http.get(url);

        return <div>{state}:{info.schemaId}</div>;
};