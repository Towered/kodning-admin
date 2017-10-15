<template>
    <div>
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">Kodning后台管理系统</el-menu-item>
            <el-submenu index="2">
                <template slot="title">书籍管理</template>
                <router-link to="/book/list" tag="li">
                    <el-menu-item index="2-1">
                            书籍列表
                    </el-menu-item>
                </router-link>
                <router-link to="/book/add" tag="li">
                    <el-menu-item index="2-3">
                        书籍添加
                    </el-menu-item>
                </router-link>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">分类管理</template>
                <el-menu-item index="3-1">语言管理</el-menu-item>
                <el-menu-item index="3-2">框架管理</el-menu-item>
                <el-menu-item index="3-3">出版社管理</el-menu-item>
            </el-submenu>
        </el-menu>
        <br /><br /><br />
    </div>
</template>
<script>
    export default {
        name: 'com-nav-menu',
        props: {
            activeIndex: {
                type: String,
                default: '1'
            }
        },
        data (){
            return {
            };
        },
        methods: {
            handleSelect(key, keyPath) {
            }
        }
    }
</script>