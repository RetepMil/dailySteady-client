type TodoTabProps = { tabOn: boolean };

function TodoTab({ tabOn }: TodoTabProps) {
  return tabOn ? (
    // prettier-ignore
    <div className={`bg-app-bg-color p-4 w-1/4 transition ease-in-out`}>
      <div>asdfdsa</div>
      <div>asdfdsa</div>
      <div>asdfdsa</div>
    </div>
  ) : null;
}

export default TodoTab;
