
noteTitle = document.querySelector('.note-title');
noteText = document.querySelector('.note-textarea');
saveNoteBtn = document.querySelector('.save-note');
newNoteBtn = document.querySelector('.new-note');
noteList = document.querySelectorAll('.list-container .list-group');

// for note in note area
let activeNote = {};

const getNotes = () =>
  fetch('/api/notes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const renderActiveNote = () => {
    hide(saveNoteBtn);

  if (activeNote.id) {
    noteTitle.setAttribute('readonly', true);
    noteText.setAttribute('readonly', true);
    noteTitle.value = activeNote.title;
    noteText.value = activeNote.text;
  } else {
    noteTitle.removeAttribute('readonly');
    noteText.removeAttribute('readonly');
    noteTitle.value = '';
    noteText.value = '';
  }};