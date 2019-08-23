import Collection from '../components/Collection';

const CollectionList = props => (
  <div>
    <Collection handle={props.query.handle} />
  </div>
);

export default CollectionList;
