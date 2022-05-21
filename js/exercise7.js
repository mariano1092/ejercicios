const doc = document

export default function mapAndVideo(section) {
  if (window.innerWidth > 1200) {
    console.log(window.innerWidth)
    doc.querySelector(section).innerHTML =
      `
      <iframe width="560" height="315" src="https://www.youtube.com/embed/eVTXPUF4Oz4"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;   clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53629.092338119495!2d-68.87290759185294!3d-32.850063034522364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e08972bd84163%3A0xc69f774a11aa269a!2sIES%209008%20Manuel%20Belgrano!5e0!3m2!1ses-419!2sar!4v1653094234752!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `
  }
  else {
    doc.querySelector(section).innerHTML =
      `
      <a href="https://www.youtube.com/embed/eVTXPUF4Oz4" target="_blank">Link YouTube</a>
      <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53629.092338119495!2d-68.87290759185294!3d-32.850063034522364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e08972bd84163%3A0xc69f774a11aa269a!2sIES%209008%20Manuel%20Belgrano!5e0!3m2!1ses-419!2sar!4v1653094234752!5m2!1ses-419!2sar" target="_blank">Link Google Map</a>
    `
  }
}
