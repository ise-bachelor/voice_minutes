import CreateSN from './StickyNote';

function DisplayCluster(){
  const cluster = [{id: 0, txt: 'aaa', x: 10, y: 10},{id: 1, txt: 'bbb', x: 70, y: 10},{id: 2, txt: 'ccc', x: 10, y: 70},{id: 3, txt: 'ddddddddd', x: 70, y: 70}];
  return(
    <>
    {
      (function () {
        const list = [];
        cluster.forEach((sn) => {
          list.push(<CreateSN sn={sn} key={sn.id}/>);
        });
        return list;
      }())
    }
    </>
  );
}

export default DisplayCluster;