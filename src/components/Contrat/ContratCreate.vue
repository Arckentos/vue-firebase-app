<template>
    <div>
        <form @submit.prevent="onSubmit">
            <div>
                <label for="nom"></label>
                <input type="text" id="nom" v-model="form.nom" required>
            </div>

            <div>
                <label for="lieu"></label>
                <input type="text" id="lieu" v-model="form.lieu">
            </div>

            <button type="submit">Create contrat</button>
        </form>
    </div>
</template>

<script>
export default {
    
}
</script> 