import { RouteComponentProps } from '@reach/router';

type Page<T = {}> = React.FC<RouteComponentProps & T>;

export default Page;
