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
  completeBotton.addEventListener("click", () => {
    // 押された完了ボタンを親タグ（div）を未完了リストから削除
    const deleteTarget = deleteBotton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // button(削除)タグを作成
  const deleteBotton = document.createElement("button");
  deleteBotton.innerText = "削除";
  console.log(deleteBotton);
  deleteBotton.addEventListener("click", () => {
    // 押された削除ボタンを親タグ（div）を未完了リストから削除
    const deleteTarget = deleteBotton.parentNode;
    // console.log(deleteTarget); // 要素が取得できていることがわかる
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

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
