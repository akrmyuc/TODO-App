import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divを生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグを生成
  const li = document.createElement("li");
  // liタグの中にテキストボックスの値を格納する
  li.innerText = inputText;

  // button(完了)タグを作成
  const completeBotton = document.createElement("button");
  completeBotton.innerText = "完了";

  // button(削除)タグを作成
  const deleteBotton = document.createElement("button");
  deleteBotton.innerText = "削除";
  console.log(deleteBotton);

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeBotton);
  div.appendChild(deleteBotton);

  // // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
