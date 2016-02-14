$.get('data.json', (data) => {
  window.timeline = new TL.Timeline('timeline-embed', data);
});
