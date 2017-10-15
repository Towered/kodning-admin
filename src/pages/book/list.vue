<template>
    <section class="page">
        <nav-menu activeIndex="2-1"></nav-menu>
        <el-row>
            <el-col :span="4" :offset="18">
                <el-input
                    placeholder="书名／ISBN"
                    icon="search">
                </el-input>
            </el-col>
        </el-row>
        <br />
        <el-row>
            <el-col :span="20" :offset="2">
                <el-table :data="tableData" stripe style="width: 100%">
                    <el-table-column
                        prop="name"
                        label="书籍名称">
                    </el-table-column>
                    <el-table-column
                        prop="author"
                        label="作者">
                    </el-table-column>
                    <el-table-column
                        prop="lang"
                        label="语言">
                    </el-table-column>
                    <el-table-column
                        prop="framework"
                        label="框架">
                    </el-table-column>
                    <el-table-column
                        prop="ISBN"
                        label="ISBN">
                    </el-table-column>
                    <el-table-column
                        prop="allowSpread" 
                        label="是否可以传播">
                    </el-table-column>
                    <el-table-column
                        label="操作">
                        <template scope="scope">
                            <el-button @click="remove" type="text" size="small">下架</el-button>
                            <el-button @click="detail" type="text" size="small">详情</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
    </section>
</template>
<script>
    import navMenu from 'com/nav-menu';
    import stream from 'util/stream';

    export default {
        name: 'books-list',
        data (){
            return {
                tableData: []
            };
        },
        components: {
            navMenu
        },
        created (){
            this.list();
        },
        methods: {
            list (){
                stream.get('/book/list').then(({ data }) => {
                    data.rows.forEach( book => {
                        //是否允许分享
                        book.allowSpread = book.allowSpread ? '是' : '否';
                        //框架
                        book.framework = book.framework || '无';
                    });
                    this.tableData = data.rows;
                });
            },
            remove (){
            },
            detail (){
            }
        }
    }
</script>