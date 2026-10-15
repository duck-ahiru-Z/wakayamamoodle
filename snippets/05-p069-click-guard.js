// スライド69：初回と2回目の違いを試す
const clicked = sessionStorage.getItem("clicked");
if (clicked !== "yes") {
  console.log("初めてのクリックです");
  sessionStorage.setItem("clicked", "yes");
} else {
  console.log("すでにクリック済みです");
}
