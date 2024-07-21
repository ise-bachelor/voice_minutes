import StickyNote from "./StickyNote";
import Cluster from "./Cluster";

let sample = "Lorem ipsum dolor sit amet. Hic dolores explicabo qui internos sint sit necessitatibus rerum ut illum molestiae et laborum quia eum assumenda fugiat. 33 error distinctio cum eligendi commodi et iure porro.";
let sampleWords = sample.split("");

let cluster = new Cluster();
let id = 0;
sampleWords.forEach(w => {
  let stickyNote = new StickyNote(id, w);
  stickyNote.visualize();
  cluster.addSN(id);
  id++;
});

