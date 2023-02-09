import "./styles.css";

const onClickAdd = () => {
  const inputText = document.querySelector("#addText").value;
  document.querySelector("#addText").value = "";

  // タグの追加
  const li = document.createElement("li");
  const div = document.createElement("div");

  // liタグの子要素に各要素を設定
  li.appendChild(div);
  div.innerText = inputText;
  console.log(li);

  // 未完了リストに追加
  document.querySelector("#uncomplate_list").appendChild(li);
};

document
  .querySelector("#add_bottun")
  .addEventListener("click", () => onClickAdd());
