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
    deleteFromIncompletList(completeBotton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeBotton.parentNode;

    // TODO内容のテキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    // button(元に戻す)タグを作成
    const backButton = document.createElement("button");
    backButton.innerText = "元に戻す";
    backButton.addEventListener("click", () => {
      // 押された元に戻すボタンの親タグ（div）を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      console.log(text);
    });

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(削除)タグを作成
  const deleteBotton = document.createElement("button");
  deleteBotton.innerText = "削除";
  deleteBotton.addEventListener("click", () => {
    // 押された削除ボタンを親タグ（div）を未完了リストから削除
    deleteFromIncompletList(deleteBotton.parentNode);
  });

  // 未完了リストから指定の要素を削除
  const deleteFromIncompletList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
  };

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
