const printCss = `
  font-family: 'DM Sans', sans-serif;
  transform:rotate(90deg);
  transform-origin: 0.5in 0.5in;
  margin: 0.2in;
  width: 1in;
  height: 2in;
  font-size:14px;
  font-family:sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

$(document).ready(() => {
  $('#printMalt').click(() => {
    const name = $('#maltName').val()
    const mfg = $('#manufacturer').val()
    const lovibond = $('#lovibond').val()
    const ppg = $('#ppg').val()

    const printHtml = `
      <div style="width: 2in; height: 0.5in; white-space: normal; font-size: 21px; padding-top: 10px; overflow: hidden; font-weight: 500;">${name}</div>
      <div style="padding-top: 10px;">${mfg}</div>
      <div style="padding-top: 8px;"><span style="border: 1px solid black; padding: 1px 2px;">${lovibond} °L</span> <span style="margin-left: 30px; border: 1px solid black; padding: 1px 2px;">${ppg} PPG</span></div>
    `

    const printWindow = window.open('', 'PRINT', 'height=400,width=600')
    printWindow.document.write(`<html><head><title>Print Label</title></head><body style="${printCss}">${printHtml}</body></html>`)
    printWindow.document.close()
    printWindow.focus()
    printWindow.print()
    printWindow.close()

    $('#maltName').val('')
    $('#manufacturer').val('')
    $('#lovibond').val('')
    $('#ppg').val('')

    $('#maltName').focus()
  })
})