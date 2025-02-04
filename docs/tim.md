<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/40215044?v=4',
    name: 'Qwerius',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/qwerius' },
      
    ]
  },
  
]
</script>

# Our Team

Say hello to our awesome team.

<VPTeamMembers size="small" :members="members" />