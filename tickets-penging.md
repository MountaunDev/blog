# Penging work - Bugs in the app

- In mobile devices the button to change the theme its not coming up. (investigate and fix it)

- The postCard it's like too black, perhaps we need to add a different color for
  the title and the content. -- Done

- The size of the text its weird, we should decrease the paragraph
  size and perhaps also user a smaller font in the time and location zone -- Done

- Limit the amount of words in the card description, If there are more words
  to show we should use an ellipsis to tell the user that there's more information,
  but we should show only like three renglons of content. -- Done

- Center the info content in the card, cause right now its reaching the border of
  the card container and it does not look so good -- Done

  - The breadcumb part it just look so simple, think and discuss another
    way more creative to show that part in the page.

  - In the dark mode, should we change the color for the link "Leer mas"

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
