import "./styles.css";

const onClickAdd = () => {
  const inputText = document.querySelector("#addText").value;
  document.querySelector("#addText").value = "";
  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除する関数
const deleteFromInCompleteList = (target) => {
  document.querySelector("#uncomplete_list").removeChild(target);
};

const createIncompleteList = (text) => {
  // liタグの追加
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list_row";
  const pTag = document.createElement("p");

  // 削除ボタンとその処理
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // const deleteTarget = div.parentNode;
    // document.getElementById("incomplete_list").removeChild(target);
    deleteFromInCompleteList(div.parentNode);
  });
  // 完了ボタンとその処理
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromInCompleteList(div.parentNode);

    // 完了リストに追加
    const addTarget = pTag.parentNode;
    const text = addTarget.firstElementChild.innerText;
    // div( = addTarget)の中身を初期化　→　null
    addTarget.textCntent = null;

    // 戻すbutton
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    // 戻すbuttonの処理
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document
        .querySelector("#complete_list")
        .removeChild(deleteTarget.parentNode);

      // テキストの取得
      const text = backButton.parentNode.firstChild.innerText;
      createIncompleteList(text);
    });

    // 完了した ToDo の liタグ を生成
    addTarget.appendChild(pTag);
    addTarget.appendChild(backButton);
    pTag.innerText = text;

    const addList = document.querySelector("#complete_list");
    addList.appendChild(addTarget.parentNode);
  });

  // liタグの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(pTag);
  pTag.innerText = text;
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.querySelector("#uncomplete_list").appendChild(li);
};

document
  .querySelector("#add_button")
  .addEventListener("click", () => onClickAdd());
