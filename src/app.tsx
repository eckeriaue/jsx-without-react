// @ts-nocheck





setTimeout(() => {
  document.querySelector('.tes').addEventListener('click', () => console.log('clicked'))
  console.log(document.querySelector('.tes'))
}, 1000)

export default (
  <div>
      <button class="tes">Expand</button>
      <span >
          Content...
      </span>
  </div>
)