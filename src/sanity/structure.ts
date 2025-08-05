import type {StructureBuilder} from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Наш кастомный пункт для настроек сайта
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .child(
          S.editor()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      
      // Разделитель для красоты
      S.divider(),

      // Все остальные типы документов (Post, Project) будут отображаться как списки по умолчанию.
      // Мы отфильтровываем 'siteSettings', чтобы он не дублировался.
      ...S.documentTypeListItems().filter(
        (listItem) => !['siteSettings'].includes(listItem.getId()!)
      ),
    ])