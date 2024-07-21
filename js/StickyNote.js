class StickyNote{
  constructor(id, txt){
    this.id = id;
    this.txt = txt;
    this.pos = [100, 100];
  }

  visualize(){
    let elWBArea = document.getElementById('white-board-area');
    let newDiv = document.createElement('div');
    newDiv.textContent = this.txt;
    elWBArea.appendChild(newDiv);
  }
}