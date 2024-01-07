# Penging work - Bugs in the app

- In mobile devices the button to change the theme its not coming up. (investigate and fix it)

  - The breadcumb part it just look so simple, think and discuss another
    way more creative to show that part in the page, maybe we can create something like https://viajarviviendo.com/

  - In the dark mode, should we change the color for the link "Leer mas"

  - We need to stablish a real name for the blog and replace all the
    mountainDev references in the project. also as part of this ticket we
    should keep in mind that we will need to buy a new domain so we could check the
    domain availability when picking the name.

  - I am trying to pick a color for the footer part all these colors create a smooth
    and nice transition, could you help me pick one,
    `const footerColors = ['#F7F7F7', '#E8E8E8', '#F5F5F5', '#E5E5E5', '#F0F0F0', '#D9D9D9', '#E6F0FA', '#E8F5E9', '#F3E5F5', '#DDDDDD'];`

    - El footer deberiamos renderizarlo en todas las paginas? O solamente en el
      Home y deberiamos crear otro footer diferente para la pagina de postDeatils

- In the postDetails page the image slider seems weird i think it's because all the
  border radius are not the same (the top-left radius) looks different

## Notes to keep in mind

- The postList currently can handle horizontal and vertical images,
  it just look larger for the vertical ones. nevertheless you cannot combine
  them. For a post you can only use vertical or horizontal images.
  Maybe in the future we can look for a solution

- How is it going to work the topics filter when the user does not select any
  topic (or desselect all of them) and we are in a specific page in the pagination?
  Because right now the function that is fetching all the posts its taking into consideration
  the actual page.

## Notes according to the content

- The post called "Tayrona: Una Aventura Inolvidable" and
  "Descubriendo la Magia de Santa Marta" are a little bit similar, check this in
  detail. Also they are using right now the same images, fix it. I believe we
  should update the content inside the post "Descubriendo la Magia de Santa Marta"
  to make it better.
