import { computed, ref } from "vue";

// 外部から使えるようにexportする
export const useTodoList = () => {
  // ローカルストレージにtodoListが存在していればparseし、
  // なければundifinedになるため空配列をセットする。
  const ls = localStorage.todoList;
  const todoListRef = ref([]);
  todoListRef.value = ls ? JSON.parse(ls) : [];

  const findById = (id) => {
    return todoListRef.value.find((todo) => todo.id === id);
  };
  // TODOリストからIDを元にそのインデックスを取得
  const findIndexById = (id) => {
    return todoListRef.value.findIndex((todo) => todo.id === id);
  };

  // 追加処理
  const add = (task) => {
    const id = new Date().getTime();
    todoListRef.value.push({ id: id, task: task, checked: false });
    localStorage.todoList = JSON.stringify(todoListRef.value);
  };

  const editId = ref(-1); // リアクティブにする
  const show = (id) => {
    const todo = findById(id);
    editId.value = id;
    return todo.task; // 画面処理させるために返す
  };

  const edit = (task) => {
    const todo = findById(editId.value);
    const idx = findIndexById(editId.value);
    todo.task = task;
    todoListRef.value.splice(idx, 1, todo);
    localStorage.todoList = JSON.stringify(todoListRef.value);
    editId.value = -1;
  };

  const del = (id) => {
    const todo = findById(id);
    const delMsg = "「" + todo.task + "」を削除しますか？";
    if (!confirm(delMsg)) return;

    const idx = findIndexById(id);
    todoListRef.value.splice(idx, 1);
    localStorage.todoList = JSON.stringify(todoListRef.value);
  };

  const check = (id) => {
    const todo = findById(id);
    const idx = findIndexById(id);
    todo.checked = !todo.checked; // true/falseを反転させる
    todoListRef.value.splice(idx, 1, todo);
    localStorage.todoList = JSON.stringify(todoListRef.value);
  };

  const countFin = computed(() => {
    console.log("computed");
    // todo.checkedは「true/false」が入っているため、trueのtodoが返る
    const finArr = todoListRef.value.filter((todo) => todo.checked);
    return finArr.length;
  });

  return { todoListRef, add, show, edit, del, check, countFin };
};
