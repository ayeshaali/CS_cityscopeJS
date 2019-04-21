// https://www.sitepoint.com/javascript-design-patterns-singleton/
//https://gist.github.com/dmnsgn/4a6ad76de1b5928f13f68f406c70bb09

class Storage {
  constructor() {
    this._cityIOurl = "";
  }

  //reqAnimFrame
  get reqAnimFrame() {
    return this._reqAnimFrame;
  }
  set reqAnimFrame(value) {
    this._reqAnimFrame = value;
  }

  //cityIO url
  get cityIOurl() {
    return this._cityIOurl;
  }
  set cityIOurl(value) {
    this._cityIOurl = value;
  }

  //map obj
  get map() {
    return this._map;
  }
  set map(value) {
    this._map = value;
  }

  //tableExtents
  get tableExtents() {
    return this._tableExtents;
  }
  set tableExtents(value) {
    this._tableExtents = value;
  }

  //cityIO data
  get cityIOdata() {
    return this._cityIOdata;
  }
  set cityIOdata(value) {
    this._cityIOdata = value;
  }

  //cityIO data
  get cityIOdata_OLD() {
    return this._cityIOdata;
  }
  set cityIOdata_OLD(value) {
    this._cityIOdata = value;
  }

  //sim data
  get simData() {
    return this._simData;
  }
  set simData(value) {
    this._simData = value;
  }

  //threeJs grid
  get threeGrid() {
    return this._threeGrid;
  }
  set threeGrid(value) {
    this._threeGrid = value;
  }

  //threeJs height state for projection
  get threeState() {
    return this._threeState;
  }
  set threeState(value) {
    this._threeState = value;
  }

  //threeJs text
  get threeText() {
    return this._threeText;
  }
  set threeText(value) {
    this._threeText = value;
  }
}

export default new Storage();
