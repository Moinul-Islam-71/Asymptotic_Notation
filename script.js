const complexities = [
  { label: 'O(1)', func: n => 1 },
  { label: 'O(log n)', func: n => Math.log2(n) },
  { label: 'O(√n)', func: n => Math.sqrt(n) },
  { label: 'O(n)', func: n => n },
  { label: 'O(n log log n)', func: n => n * Math.log2(Math.log2(n)) },
  { label: 'O(n log n)', func: n => n * Math.log2(n) },
  { label: 'O(n²)', func: n => n * n },
  { label: 'O(2ⁿ)', func: n => Math.pow(2, n) },
  { label: 'O(n!)', func: n => {
      let fact = 1;
      for (let i = 1; i <= n; i++) fact *= i;
      return fact;
    }
  }
];

const n = 10;
const chart = document.getElementById('chart');

complexities.forEach(c => {
  let val = c.func(n);
  let height = Math.min(100 + (Math.log2(val) * 20), 400);

  const bar = document.createElement('div');
  bar.className = 'bar';
  bar.style.height = height + 'px';

  const value = document.createElement('span');
  value.innerText = c.label;
  bar.appendChild(value);

  const label = document.createElement('div');
  label.className = 'label';
  label.innerText = c.label;

  const container = document.createElement('div');
  container.appendChild(bar);
  container.appendChild(label);

  chart.appendChild(container);
});
