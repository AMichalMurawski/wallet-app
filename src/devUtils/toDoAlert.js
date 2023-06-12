export const toDoAlert = txt => {
  const prefix = 'TO DO:\n\n';
  if (typeof txt === 'string') {
    return window.alert(prefix + txt);
  }
  if (Array.isArray(txt)) {
    return window.alert(prefix + txt.join('\n'));
  }
  window.alert('Wrong props in function toDoAlert()');
};
