import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projects', {
    state: () => ({
        projects: [
            {
                image: "https://down.imgspng.com/download/0720/wordpress_PNG47.png",
                title: 'Wordpress',
                description: "WP",
                technologies: ['PHP', 'HTML','CSS'],
                github_url: 'http://karlalelono.sijaa26.site',
                opensource: true,
            }
        ]
    })
})